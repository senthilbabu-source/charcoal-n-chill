#!/bin/bash

echo "🎯 WordPress Image Migration Script"
echo "===================================="
echo ""

# Set up directories
# Using absolute paths to access Downloads from project root
DOWNLOADS_DIR="$HOME/Downloads"
EXTRACT_DIR="$DOWNLOADS_DIR/wordpress-images-extracted"
FLAT_DIR="$DOWNLOADS_DIR/wordpress-images-flat"
ZIP_FILE="$DOWNLOADS_DIR/uploads-year-folders.zip"

# Check if zip exists
if [ ! -f "$ZIP_FILE" ]; then
    echo "❌ Error: uploads-year-folders.zip not found at $ZIP_FILE"
    exit 1
fi

echo "✅ Found zip file: $ZIP_FILE"
echo ""

# Clean up old directories if they exist
if [ -d "$EXTRACT_DIR" ]; then
    echo "🗑️  Removing old extracted folder..."
    rm -rf "$EXTRACT_DIR"
fi

if [ -d "$FLAT_DIR" ]; then
    echo "🗑️  Removing old flattened folder..."
    rm -rf "$FLAT_DIR"
fi

# Create fresh directories
mkdir -p "$EXTRACT_DIR"
mkdir -p "$FLAT_DIR"

echo "📦 Extracting zip file..."
unzip -q "$ZIP_FILE" -d "$EXTRACT_DIR"
echo "✅ Extraction complete"
echo ""

# Count total files before flattening
TOTAL_IMAGES=$(find "$EXTRACT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" -o -iname "*.svg" \) | wc -l)
echo "📊 Found $TOTAL_IMAGES images to migrate"
echo ""

# Flatten the structure
echo "🔄 Flattening folder structure..."
COUNTER=0
DUPLICATES=0

# Use find to get all image files
find "$EXTRACT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" -o -iname "*.svg" \) | while read -r file; do
    filename=$(basename "$file")
    destination="$FLAT_DIR/$filename"
    
    # Check if file already exists (duplicate filename)
    if [ -f "$destination" ]; then
        # Handle duplicates: append parent folder structure
        # Remove prefix
        relative_path="${file#$EXTRACT_DIR/}"
        # Get directory part (e.g., 2023/10)
        dir_part=$(dirname "$relative_path")
        # Replace / with - (e.g., 2023-10)
        suffix=$(echo "$dir_part" | tr '/' '-')
        
        base="${filename%.*}"
        ext="${filename##*.}"
        
        # New name: image-2023-10.jpg
        new_filename="${base}-${suffix}.${ext}"
        
        # echo "⚠️  Duplicate found: $filename → Renamed to: $new_filename"
        cp "$file" "$FLAT_DIR/$new_filename"
        DUPLICATES=$((DUPLICATES + 1))
    else
        cp "$file" "$destination"
    fi
    
    COUNTER=$((COUNTER + 1))
    
    # Progress indicator
    if [ $((COUNTER % 50)) -eq 0 ]; then
        echo "   Processed: $COUNTER/$TOTAL_IMAGES images..."
    fi
done

echo ""
echo "✅ Flattening complete!"
echo ""

# Final count
FINAL_COUNT=$(ls -1 "$FLAT_DIR" | wc -l)
echo "📊 Migration Summary:"
echo "   Total images processed: $TOTAL_IMAGES"
echo "   Files in flat folder: $FINAL_COUNT"
echo "   Duplicates renamed: $DUPLICATES"
echo ""

# List duplicates sample
if [ $DUPLICATES -gt 0 ]; then
    echo "📋 Renamed files (duplicates sample):"
    ls "$FLAT_DIR" | grep -E "\-[0-9]{4}" | head -5
    echo ""
fi

# Check for common image files
echo "🔍 Sample of migrated images:"
ls "$FLAT_DIR" | head -10
echo ""

echo "✅ All images ready in: $FLAT_DIR"

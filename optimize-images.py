from PIL import Image

image = Image.open("src/img/todo.PNG").convert("RGB")

image.thumbnail((800, 600), Image.Resampling.LANCZOS)

image.save(
    "public/todo.webp",
    "WEBP",
    quality=82,
    method=6
)

print("TO-DO image optimized successfully!")

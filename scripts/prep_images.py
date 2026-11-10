#!/usr/bin/env python3
"""Prépare les images du portfolio :
1. Redresse la photo (applique l'orientation EXIF dans les pixels)
2. Copie le logo dans public/
"""
from PIL import Image, ImageOps
import os

SRC_PHOTO = "/home/z/my-project/upload/20260916_105426.jpg"
SRC_LOGO = "/home/z/my-project/upload/file_0000000006508210abb92b92a1d6f8bb.png"
OUT_DIR = "/home/z/my-project/public"

os.makedirs(OUT_DIR, exist_ok=True)

# --- Photo : appliquer l'orientation EXIF et normaliser ---
photo = Image.open(SRC_PHOTO)
print("Photo d'origine :", photo.size, "EXIF orientation:",
      photo.getexif().get(274, "aucune"))

photo_fixed = ImageOps.exif_transpose(photo).convert("RGB")
print("Photo redressée :", photo_fixed.size)

# Redimensionner raisonnablement pour le web (max 900px de large)
if photo_fixed.width > 900:
    ratio = 900 / photo_fixed.width
    photo_fixed = photo_fixed.resize(
        (900, int(photo_fixed.height * ratio)), Image.LANCZOS)
photo_fixed.save(os.path.join(OUT_DIR, "portrait.jpg"), quality=88,
                 optimize=True, progressive=True)
print("Portrait enregistré :", photo_fixed.size)

# --- Logo : optimiser ---
logo = Image.open(SRC_LOGO).convert("RGBA")
print("Logo d'origine :", logo.size)
if logo.width > 700:
    ratio = 700 / logo.width
    logo = logo.resize((700, int(logo.height * ratio)), Image.LANCZOS)
logo.save(os.path.join(OUT_DIR, "logo-bt.png"), optimize=True)
print("Logo enregistré :", logo.size)

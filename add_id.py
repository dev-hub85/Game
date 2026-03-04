# import json
# import re

# def name_to_id(name):
#     return re.sub(r"\s+", "-", name.strip().lower())

# # Read JSON file
# with open("file.json", "r", encoding="utf-8") as file:
#     data = json.load(file)

# # Modify data
# for item in data:
#     if "title" in item:
#         item["id"] = name_to_id(item["title"])

# # Write back to file (optional)
# with open("data_updated.json", "w", encoding="utf-8") as file:
#     json.dump(data, file, indent=2)

# print("Done!")
import json

# Read JSON file
with open("data_updated.json", "r", encoding="utf-8") as file:
    data = json.load(file)

for item in data:
    if "tags" in item and isinstance(item["tags"], str):
        # Convert tags string to list
        tags_list = [tag.strip() for tag in item["tags"].split(",")]

        # Assign tags & categories as lists
        item["tags"] = tags_list
        item["categories"] = tags_list.copy()

# Write updated JSON
with open("data_updated.json", "w", encoding="utf-8") as file:
    json.dump(data, file, indent=2)

print("Tags and categories converted successfully ✅")

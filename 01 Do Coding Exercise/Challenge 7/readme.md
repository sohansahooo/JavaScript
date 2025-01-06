# Keyword Search Challenge

## Challenge
Can you search for a keyword in a list of messages? This challenge will help you practice working with arrays and strings.

## Explanation
In this challenge, you'll write a program to search for a specific keyword within an array of messages. Your task is to find and return the messages that contain the given keyword.

**Input:** 
- `messages` (an array of strings where each string is a message)
- `keyword` (a string representing the keyword to search for)

**Output:** An array of messages that contain the keyword, or an empty array if no messages contain the keyword.

**Example:**
- **Input:** `messages = ["Hey, how are you?", "I miss you!", "Let's catch up soon!", "Good morning!"]`, `keyword = "catch"`
- **Output:** `["Let's catch up soon!"]`

- **Input:** `messages = ["Hey, how are you?", "I miss you!", "Good morning!"]`, `keyword = "hello"`
- **Output:** `[]`

## Assignments
Test your skills with these search challenges:

### 1. Search for Favorite Movies

**Task:** Write a program to search for a movie title in a list of your favorite movies.

**Input:** `movies` (an array of movie titles) and `search_title` (a string representing the title to search for)

**Output:** An array of movie titles that match the search title.

**Example:**
- **Input:** `movies = ["Dilwale Dulhania Le Jayenge", "3 Idiots", "Lagaan", "Sholay"]`, `search_title = "3 Idiots"`
- **Output:** `["3 Idiots"]`

- **Input:** `movies = ["Dilwale Dulhania Le Jayenge", "Lagaan"]`, `search_title = "Kabhi Khushi Kabhie Gham"`
- **Output:** `[]`

### 2. Find Recipe Ingredients

**Task:** Write a program to check if certain ingredients are listed in an Indian recipe.

**Input:** `recipe` (an array of ingredient names) and `ingredient_to_find` (a string representing the ingredient to search for)

**Output:** "Found" if the ingredient is in the recipe, otherwise "Not found".

**Example:**
- **Input:** `recipe = ["Aata", "Cheeni", "Dahi"]`, `ingredient_to_find = "Cheeni"`
- **Output:** "Found"

- **Input:** `recipe = ["Aata", "Dahi"]`, `ingredient_to_find = "Jeera"`
- **Output:** "Not found"

### 3. Search for Contact in Phonebook

**Task:** Write a program to search for a contact in a phonebook.

**Input:** `phonebook` (an array of contact names) and `contact_name` (a string representing the contact to search for)

**Output:** An array of contact names that match the search name.

**Example:**
- **Input:** `phonebook = ["Amit", "Neha", "Ravi", "Sita"]`, `contact_name = "Neha"`
- **Output:** `["Neha"]`

- **Input:** `phonebook = ["Amit", "Ravi"]`, `contact_name = "Sita"`
- **Output:** `[]`

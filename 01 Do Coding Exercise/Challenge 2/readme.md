# Assignments
Test your skills with these IF-ELSE programming challenges:

### 1. Driving Eligibility

**Task:** Write a program to check if a person can apply for a driving license based on age.

**Input:** 
- `age` (an integer representing the person's age)
- `min_driving_age` (an integer representing the minimum driving age)

**Output:** "Eligible for a driving license" or "Not eligible for a driving license"

**Example:**

- Input: `age = 17`, `min_driving_age = 16`
- Output: "Eligible for driving license"

- Input: `age = 14`, `min_driving_age = 16`
- Output: "Not eligible for driving license"

### 2. Senior Citizen Discount

**Task:** Write a program to check if a person is eligible for a senior citizen discount based on age.

**Input:** 
- `age` (an integer representing the person's age)
- `senior_age` (an integer representing the age to qualify as a senior citizen)

**Output:** "Eligible for senior citizen discount" or "Not eligible for senior citizen discount"

**Example:**

- Input: `age = 65`, `senior_age = 60`
- Output: "Eligible for senior citizen discount"

- Input: `age = 55`, `senior_age = 60`
- Output: "Not eligible for senior citizen discount"

### 3. Loyalty Reward

**Task:** Write a program to check if a user qualifies for a loyalty reward based on their membership status and total purchases over the year.

**Input:** 
- `membership_status` (a boolean)
- `total_purchases` (a decimal number representing total purchases for the year)

Members who have spent over $500 in a year receive a loyalty reward.

**Output:** "Eligible for loyalty reward" or "Not eligible for loyalty reward"

**Example:**

- Input: `membership_status = true`, `total_purchases = 600`
- Output: "Eligible for loyalty reward"

- Input: `membership_status = true`, `total_purchases = 450`
- Output: "Not eligible for loyalty reward"

### 4. Free Shipping

**Task:** Write a program to determine if a user is eligible for free shipping based on their membership status and purchase amount.

**Input:** 
- `membership_status` (a boolean)
- `purchase_amount` (a decimal number)

Users receive free shipping if they are members and spend more than $75.

**Output:** "Eligible for free shipping" or "Not eligible for free shipping"

**Example:**

- Input: `membership_status = true`, `purchase_amount = 80`
- Output: "Eligible for free shipping"

- Input: `membership_status = false`, `purchase_amount = 80`
- Output: "Not eligible for free shipping"

### 5. Bonus Points

**Task:** Write a program to determine if a user earns bonus points based on their membership status and purchase amount. Members earn bonus points if they spend over $100, while non-members only earn points if they spend over $200.

**Input:** 
- `membership_status` (a boolean)
- `purchase_amount` (a decimal number)

**Output:** "Earns bonus points" or "Does not earn bonus points"

**Example:**

- Input: `membership_status = true`, `purchase_amount = 150`
- Output: "Earns bonus points"

- Input: `membership_status = false`, `purchase_amount = 150`
- Output: "Does not earn bonus points"

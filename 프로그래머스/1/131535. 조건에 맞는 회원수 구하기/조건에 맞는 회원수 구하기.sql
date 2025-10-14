SELECT COUNT(*) AS USERS
FROM user_info
WHERE (age >= 20 AND age <= 29)
AND SUBSTR(joined, 1, 4) = '2021'
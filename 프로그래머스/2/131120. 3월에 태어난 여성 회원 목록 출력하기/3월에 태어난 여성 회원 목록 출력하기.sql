SELECT member_id, member_name, gender, DATE_FORMAT(date_of_birth, '%Y-%m-%d') AS DATE_OF_BIRTH
FROM member_profile
WHERE gender = 'W' AND SUBSTR(date_of_birth, 6, 2) = '03' AND tlno IS NOT NULL
ORDER BY member_id
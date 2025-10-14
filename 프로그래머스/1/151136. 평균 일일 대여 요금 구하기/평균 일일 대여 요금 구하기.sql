SELECT ROUND(AVG(daily_fee), 0) AS AVERAGE_FEE
FROM car_rental_company_car 
GROUP BY car_type
HAVING car_type = 'SUV'
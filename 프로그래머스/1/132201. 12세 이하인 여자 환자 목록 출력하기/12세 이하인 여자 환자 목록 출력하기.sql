SELECT a.pt_name, a.pt_no, a.gend_cd, a.age, COALESCE(a.tlno, 'NONE') as tlno
FROM patient AS a
WHERE a.gend_cd = 'W' AND a.age <= 12
ORDER BY a.age DESC, a.pt_name ASC
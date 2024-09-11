length = int(input())

if length >= 620 and length <= 780:
    print('Red')
elif length >= 590 and length <= 620:
    print('Orange')
elif length >= 570 and length <= 590:
    print('Yellow') 
elif length >= 495 and length <= 570:
    print('Green')
elif length >= 450 and length <= 495:
    print('Blue')
elif length >= 425 and length <= 450:
    print("Indigo")
else:
    print('Violet')
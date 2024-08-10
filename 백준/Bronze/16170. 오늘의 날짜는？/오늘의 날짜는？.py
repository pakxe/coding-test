from datetime import datetime

# 현재 날짜와 시간을 가져옵니다.
current_time = datetime.utcnow()

# 연도, 월, 일을 출력합니다. 한자리수 월과 일에 0을 붙입니다.
print(f"{current_time.year:04}")
print(f"{current_time.month:02}")
print(f"{current_time.day:02}")

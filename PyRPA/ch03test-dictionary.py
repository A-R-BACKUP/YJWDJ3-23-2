dummy_data = [
    ['이영진',300],
    ['이영진',400],
    ['김영진',500],
    ['김영진',600],
    ['이영진',700]
]

users = {} # 비어 있는 딕셔너리 초기화

for row in dummy_data:
    name = row[0]

    if name not in users:
        users[name] = [] # 리스트 초기화, 연관배열과 유사
    users[name].append(row)

for key, value in users.items(): # 딕셔너리명.items() - 튜블로 반환
    print(value)   
    total=0
    for row in value:
        total += row[1]
    print(key,total)


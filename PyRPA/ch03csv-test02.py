import csv

with open('./input/items2.csv',encoding='ansi') as f:
    reader = csv.reader(f)
    head = next(reader)
    
    total = 0
    for row in reader:
        name, price,cnt,subtotal = row
        print(name,price,cnt,subtotal)
        total+=int(subtotal)
    
    print(f'합계: {total}원')

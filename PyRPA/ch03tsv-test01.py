import csv

with open('./input/items3.tsv',encoding='utf-8') as f:
    reader = csv.reader(f,delimiter='\t')
    head = next(reader)
    
    total = 0
    for row in reader:
        name, price,cnt,subtotal = row
        print(name,price,cnt,subtotal)
        total+=int(subtotal)
    
    print(f'합계: {total}원')

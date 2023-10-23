import csv,pprint

with open('./input/items2.csv',encoding='ansi') as f:
    text = f.read().strip()
    lines = text.split('\n')
    data = [v.split(',') for v in lines]
    pprint.pprint(data)

with open('./input/items2.csv',encoding='ansi') as f:
    reader = csv.reader(f)
    data = [row for row in reader]    
    pprint.pprint(data)
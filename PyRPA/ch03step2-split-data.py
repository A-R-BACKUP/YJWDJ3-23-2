import openpyxl as xl, json

input_file = './output/merged_file.xlsx'
out_file = './output/split_data.json'



def calc_user(rows):
    total = 0
    items =[]
    for row in rows:
        date, _, item, cnt, price, _ = row # 구조분해할당
        date_s = date.strftime('%m/%d')
        items.append([date_s,item,cnt,price])
        total += cnt*price
    return {'items':items,'total':total}


def split_data():
    # 엑셀파일 읽어 딕셔너리 저장
    users = read_xlsx_split(input_file)

    result = {}
    for name, rows in users.items():
        result[name] = calc_user(rows)
        print(name,result[name]['total'])
    with open(out_file, 'wt') as fp: # 결과를 json 파일로 저장
        json.dump(result,fp)

def read_xlsx_split(inFile):
    users ={}
    sheet = xl.load_workbook(inFile).active

    for row in sheet.iter_rows():
        values = [col.value for col in row]
        name = values[1]
        if name not in users:
            users[name]=[]
        users[name].append(values)
    return users

if __name__ == '__main__':
    split_data()
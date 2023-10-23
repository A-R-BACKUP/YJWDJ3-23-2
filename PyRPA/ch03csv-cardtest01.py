import csv,openpyxl as xl

입력파일 = './input/name_addr.csv'
템플릿파일 = './input/card-template.xlsx'
출력파일 = './output/csv_card.xlsx'

def read_csv(fname):
    with open(fname,encoding='ansi') as f:
        reader = csv.reader(f)
        next(reader)
        return [v for v in reader]

book = xl.load_workbook(템플릿파일)
sheet_tpl = book['Sheet']    

for i, person in enumerate(read_csv(입력파일)):
    name,zipnum,addr = person

    idx = i % 10

    if idx ==0:
        sheet = book.copy_worksheet(sheet_tpl)
        sheet.title='Page '+str(i//10)
    row = 4*(idx%5)+2
    col = 2*(idx//5)+2

    sheet.cell(row=row+0, column=col, value=name)
    sheet.cell(row=row+1, column=col, value=zipnum)
    sheet.cell(row=row+2, column=col, value=addr)

book.remove(sheet_tpl)    
book.save(출력파일)

    
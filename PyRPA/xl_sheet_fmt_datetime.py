import openpyxl as xl
import datetime


book = xl.Workbook()
sheet = book.active

dt = datetime.datetime(year=2023,month=9,day=19,hour=11,minute=42,second=23)

sheet.append([dt,dt,dt,dt])

sheet['a1'].number_format = 'yyyy\/mm\/dd'
sheet['b1'].number_format = 'yyyy년mm월dd일'
sheet['c1'].number_format = 'hh:mm:ss'
sheet['d1'].number_format = 'mm\/dd hh:mm:ss'

book.save('output/cell_format_date.xlsx')
import openpyxl as xl
import datetime

book = xl.Workbook()
sheet = book.active

cell = sheet['A1']
cell.value = 123
sheet['a2']= 'data_type='+cell.data_type

cell = sheet['b1']
cell.value = "123"
sheet['b2']= 'data_type='+cell.data_type

cell = sheet['c1']
cell.value = datetime.datetime(2023,9,19)
sheet['c2']= 'data_type='+cell.data_type

book.save('output/cellfmt_datatype.xslx')


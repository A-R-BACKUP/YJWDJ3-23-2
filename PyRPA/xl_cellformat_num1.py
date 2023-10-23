import openpyxl as xl

book = xl.Workbook()
sheet = book.active

val = 3.14159
sheet.append([val,val,val])

sheet['A1'].number_format = '#'
sheet['B1'].number_format = '#.##'
sheet['C1'].number_format = '#.####'

book.save('output/cell_format_num1.xlsx')


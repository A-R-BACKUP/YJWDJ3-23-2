import openpyxl as xl
import os

dir = 'output'
if dir not in os.listdir():
    os.mkdir(dir)

book = xl.Workbook()
sheet = book.active

for y in range(1,10):
    for x in range(1,10):
        cell = sheet.cell(y,x,x*y) #row, column, value
        print(cell.coordinate)


book.save(dir+'/write_rowscols.xlsx')
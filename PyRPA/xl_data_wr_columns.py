import openpyxl as xl
import os

dir = 'output'
if dir not in os.listdir():
    os.mkdir(dir)

book = xl.Workbook()
sheet = book.active

for i in range(10): # range(10): 0~9
    sheet.cell(row=(i+1),column=1,value=i)

book.save(dir+'/write_cell_colums.xlsx')
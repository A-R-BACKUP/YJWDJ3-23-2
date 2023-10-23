import openpyxl as xl

book = xl.Workbook()
sheet = book.active

sheet.append(['서식','예시1','예시2'])

def set_cell_format(cname, value, fmt):
    c = sheet[cname]
    c.value=value
    c.number_format=fmt

digit_fmt = '#,##0'
sheet['A2'] = digit_fmt
set_cell_format('B2',12345,digit_fmt)
set_cell_format('C2',123456789,digit_fmt)

cur_fmt='"￦"#,##0 ;  "￦"-#,##0' 
sheet['A3'] = cur_fmt
set_cell_format('B3',12345,cur_fmt)
set_cell_format('C3',-12345,cur_fmt)

num_fmt = '#,##0;[red]"△ "#,##0'
sheet['A4'] = num_fmt
set_cell_format('B4',12345,num_fmt)
set_cell_format('C4',-12345,num_fmt)

book.save('output/cell_format_num2.xlsx')


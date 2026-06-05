def calculo(a, b):
  while True:
    forma = int(input('''você deseja 
  [1]somar
  [2]multiplicar   
  [3]dividir   
  [4]subtrair
  [5]sair do programa'''))
    if forma == 1:
      print(a + b)
    elif forma == 2:
      print(a * b)
    elif forma == 3:
      print(a / b)
    elif forma == 4:
      print(a - b)
    elif forma == 5:
      break
    else:
      print('opção invalida!')
      continue
num = int(input('digite um numero: '))
num1 = int(input('digite outro numero: '))
print(calculo(num,num1))
print('volte senpre!')

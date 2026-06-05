class Cliente:
    def __init__(self, nome, cpf, endereco):
        self.nome = nome
        self.cpf = cpf
        self.endereco = endereco

    def atualizar_endereco(self, novo_endereco):
        self.endereco = novo_endereco

    def __str__(self):
        return f"Cliente: {self.nome}, CPF: {self.cpf}, Endereço: {self.endereco}"

class Produto:
    def __init__(self, nome, valor, quantidade):
        self.nome = nome
        self.valor = valor
        self.quantidade = quantidade

    def atualizar_estoque(self, quantidade_vendida):
        if quantidade_vendida <= self.quantidade:
            self.quantidade -= quantidade_vendida
        else:
            raise ValueError("Quantidade insuficiente em estoque")
    def __str__(self):
        return f"Produto: {self.nome}, Valor: R${self.valor:.2f}, Quantidade em estoque: {self.quantidade}"
    
class Venda:
    def __init__(self, cliente, produto, quantidade):
        self.cliente = cliente
        self.produto = produto
        self.quantidade = quantidade
        self.valor_total = produto.valor * quantidade
        produto.atualizar_estoque(quantidade)
    def __str__(self):
        return (f"Venda para {self.cliente.nome}: {self.quantidade} x {self.produto.nome} "
                f"por R${self.valor_total:.2f}")    
cliente1 = Cliente("Ana Silva", "123.456.789-00", "Rua A, 123")
produto1 = Produto("Arroz", 20.0, 50)   
print(cliente1)
print(produto1) 
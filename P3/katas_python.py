"""Proyecto 3 - Katas Python.
"""

from functools import reduce
from math import pi


# EJERCICIO 1
# Devuelve la frecuencia de cada carácter, ignorando los espacios.
def frecuencia_letras(texto):
    frecuencias = {}
    for letra in texto:
        if letra != " ":
            frecuencias[letra] = frecuencias.get(letra, 0) + 1
    return frecuencias


# EJERCICIO 2
# Obtiene una nueva lista con el doble de cada número usando map().
def duplicar_valores(numeros):
    return list(map(lambda numero: numero * 2, numeros))


# EJERCICIO 3
# Devuelve las palabras que contienen la palabra objetivo.
def buscar_palabras(palabras, objetivo):
    return [palabra for palabra in palabras if objetivo in palabra]


# EJERCICIO 4
# Calcula la diferencia entre los valores correspondientes de dos listas.
def diferencia_listas(lista_1, lista_2):
    return list(map(lambda valores: valores[0] - valores[1], zip(lista_1, lista_2)))


# EJERCICIO 5
# Devuelve la media y el estado aprobado/suspenso.
def calcular_media_y_estado(notas, nota_aprobado=5):
    if not notas:
        raise ValueError("La lista de notas no puede estar vacía")
    media = sum(notas) / len(notas)
    estado = "aprobado" if media >= nota_aprobado else "suspenso"
    return media, estado


# EJERCICIO 6
# Calcula el factorial recursivamente.
def factorial(numero):
    if numero < 0:
        raise ValueError("El factorial no está definido para números negativos")
    if numero in (0, 1):
        return 1
    return numero * factorial(numero - 1)


# EJERCICIO 7
# Convierte una lista de tuplas en una lista de strings usando map().
def tuplas_a_strings(tuplas):
    return list(map(str, tuplas))


# EJERCICIO 8
# Solicita dos números y controla valores no numéricos y división por cero.
def division_interactiva():
    try:
        numero_1 = float(input("Introduce el primer número: "))
        numero_2 = float(input("Introduce el segundo número: "))
        resultado = numero_1 / numero_2
    except ValueError:
        print("Debes introducir valores numéricos.")
    except ZeroDivisionError:
        print("No se puede dividir entre cero.")
    else:
        print(f"División realizada correctamente: {resultado}")


# EJERCICIO 9
# Excluye las mascotas prohibidas usando filter().
def filtrar_mascotas(mascotas):
    prohibidas = ["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]
    return list(filter(lambda mascota: mascota not in prohibidas, mascotas))


# EJERCICIO 10
class ListaVaciaError(Exception):
    """Error producido cuando se intenta promediar una lista vacía."""


def promedio_seguro(numeros):
    if not numeros:
        raise ListaVaciaError("No se puede calcular el promedio de una lista vacía")
    return sum(numeros) / len(numeros)


def manejar_promedio(numeros):
    try:
        return promedio_seguro(numeros)
    except ListaVaciaError as error:
        return f"Error: {error}"


# EJERCICIO 11
# Solicita una edad y controla valores no numéricos o fuera de 0-120.
def solicitar_edad():
    try:
        edad = int(input("Introduce tu edad: "))
        if not 0 <= edad <= 120:
            raise ValueError("La edad debe estar entre 0 y 120")
    except ValueError as error:
        print(f"Edad no válida: {error}")
    else:
        print(f"Edad registrada correctamente: {edad}")


# EJERCICIO 12
# Devuelve la longitud de cada palabra usando map().
def longitudes_palabras(frase):
    return list(map(len, frase.split()))


# EJERCICIO 13
# Devuelve cada carácter único en mayúscula y minúscula usando map().
def caracteres_mayusculas_minusculas(caracteres):
    caracteres_unicos = dict.fromkeys(caracteres)
    return list(map(lambda letra: (letra.upper(), letra.lower()), caracteres_unicos))


# EJERCICIO 14
# Filtra las palabras que empiezan por una letra concreta.
def palabras_por_inicial(palabras, letra):
    return list(filter(lambda palabra: palabra.startswith(letra), palabras))


# EJERCICIO 15
# Suma 3 a cada número mediante una función lambda.
sumar_tres = lambda numeros: list(map(lambda numero: numero + 3, numeros))


# EJERCICIO 16
# Filtra las palabras cuya longitud es mayor que n.
def palabras_mas_largas(palabras, n):
    return list(filter(lambda palabra: len(palabra) > n, palabras))


# EJERCICIO 17
# Convierte una lista de dígitos en el número correspondiente usando reduce().
def digitos_a_numero(digitos):
    return reduce(lambda acumulado, digito: acumulado * 10 + digito, digitos, 0)


# EJERCICIO 18
# Filtra estudiantes con una calificación igual o superior a 90.
def estudiantes_destacados(estudiantes):
    return list(filter(lambda estudiante: estudiante["calificacion"] >= 90, estudiantes))


# EJERCICIO 19
# Filtra los números impares con una función lambda.
filtrar_impares = lambda numeros: list(filter(lambda numero: numero % 2 != 0, numeros))


# EJERCICIO 20
# Conserva únicamente valores cuyo tipo exacto es int.
def filtrar_enteros(valores):
    return list(filter(lambda valor: type(valor) is int, valores))


# EJERCICIO 21
# Calcula el cubo mediante una función lambda.
cubo = lambda numero: numero**3


# EJERCICIO 22
# Obtiene el producto total usando reduce().
def producto_total(numeros):
    return reduce(lambda acumulado, numero: acumulado * numero, numeros, 1)


# EJERCICIO 23
# Concatena una lista de palabras usando reduce().
def concatenar_palabras(palabras):
    return reduce(lambda texto, palabra: f"{texto} {palabra}", palabras).strip() if palabras else ""


# EJERCICIO 24
# Calcula la diferencia total mediante reduce(), de izquierda a derecha.
def diferencia_total(numeros):
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    return reduce(lambda resultado, numero: resultado - numero, numeros)


# EJERCICIO 25
# Cuenta los caracteres de una cadena.
def contar_caracteres(texto):
    return len(texto)


# EJERCICIO 26
# Calcula el resto de la división mediante una función lambda.
calcular_resto = lambda numero_1, numero_2: numero_1 % numero_2


# EJERCICIO 27
# Calcula el promedio de una lista.
def calcular_promedio(numeros):
    if not numeros:
        raise ValueError("La lista no puede estar vacía")
    return sum(numeros) / len(numeros)


# EJERCICIO 28
# Devuelve el primer elemento que aparece duplicado.
def primer_duplicado(lista):
    vistos = set()
    for elemento in lista:
        if elemento in vistos:
            return elemento
        vistos.add(elemento)
    return None


# EJERCICIO 29
# Enmascara todos los caracteres excepto los cuatro últimos.
def enmascarar(valor):
    texto = str(valor)
    if len(texto) <= 4:
        return texto
    return "#" * (len(texto) - 4) + texto[-4:]


# EJERCICIO 30
# Comprueba si dos palabras son anagramas.
def son_anagramas(palabra_1, palabra_2):
    normalizada_1 = palabra_1.replace(" ", "").lower()
    normalizada_2 = palabra_2.replace(" ", "").lower()
    return sorted(normalizada_1) == sorted(normalizada_2)


# EJERCICIO 31
# Solicita nombres y lanza una excepción si el buscado no aparece.
def buscar_nombre_interactivo():
    nombres = [nombre.strip() for nombre in input("Introduce nombres separados por comas: ").split(",")]
    nombre_buscado = input("Nombre que quieres buscar: ").strip()
    if nombre_buscado not in nombres:
        raise ValueError(f"{nombre_buscado} no está en la lista")
    print(f"{nombre_buscado} fue encontrado")


# EJERCICIO 32
# Busca el puesto de un empleado por su nombre completo.
def buscar_puesto(nombre_completo, empleados):
    for empleado in empleados:
        if empleado["nombre"] == nombre_completo:
            return empleado["puesto"]
    return f"{nombre_completo} no trabaja aquí"


# EJERCICIO 33
# Suma los elementos correspondientes de dos listas mediante lambda.
sumar_listas = lambda lista_1, lista_2: list(map(lambda valores: valores[0] + valores[1], zip(lista_1, lista_2)))


# EJERCICIO 34
# Clase Arbol con tronco y ramas.
class Arbol:
    def __init__(self):
        self.tronco = 1
        self.ramas = []

    def crecer_tronco(self):
        self.tronco += 1

    def nueva_rama(self):
        self.ramas.append(1)

    def crecer_ramas(self):
        self.ramas = [rama + 1 for rama in self.ramas]

    def quitar_rama(self, posicion):
        if not 0 <= posicion < len(self.ramas):
            raise IndexError("La posición de la rama no existe")
        return self.ramas.pop(posicion)

    def info_arbol(self):
        return {
            "longitud_tronco": self.tronco,
            "numero_ramas": len(self.ramas),
            "longitudes_ramas": self.ramas.copy(),
        }


# EJERCICIO 35
# Clase UsuarioBanco con operaciones de saldo.
class UsuarioBanco:
    def __init__(self, nombre, saldo, cuenta_corriente):
        self.nombre = nombre
        self.saldo = saldo
        self.cuenta_corriente = cuenta_corriente

    def retirar_dinero(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser mayor que cero")
        if not self.cuenta_corriente:
            raise ValueError("El usuario no tiene cuenta corriente")
        if cantidad > self.saldo:
            raise ValueError("Saldo insuficiente")
        self.saldo -= cantidad

    def transferir_dinero(self, otro_usuario, cantidad):
        otro_usuario.retirar_dinero(cantidad)
        self.agregar_dinero(cantidad)

    def agregar_dinero(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser mayor que cero")
        self.saldo += cantidad


# EJERCICIO 36
# Procesa texto contando, reemplazando o eliminando palabras.
def contar_palabras(texto):
    contador = {}
    for palabra in texto.split():
        contador[palabra] = contador.get(palabra, 0) + 1
    return contador


def reemplazar_palabras(texto, palabra_original, palabra_nueva):
    return texto.replace(palabra_original, palabra_nueva)


def eliminar_palabra(texto, palabra_a_eliminar):
    return " ".join(
        palabra for palabra in texto.split() if palabra != palabra_a_eliminar
    )


def procesar_texto(texto, opcion, *args):
    if opcion == "contar":
        return contar_palabras(texto)
    if opcion == "reemplazar" and len(args) == 2:
        return reemplazar_palabras(texto, args[0], args[1])
    if opcion == "eliminar" and len(args) == 1:
        return eliminar_palabra(texto, args[0])
    raise ValueError("Opción o argumentos no válidos")


# EJERCICIO 37
# Indica si es de noche, de día o de tarde según una hora.
def periodo_del_dia(hora):
    if not 0 <= hora <= 23:
        raise ValueError("La hora debe estar entre 0 y 23")
    if 6 <= hora < 12:
        return "día"
    if 12 <= hora < 20:
        return "tarde"
    return "noche"


def periodo_interactivo():
    try:
        hora = int(input("Introduce una hora entre 0 y 23: "))
        print(f"Es de {periodo_del_dia(hora)}")
    except ValueError as error:
        print(f"Hora no válida: {error}")


# EJERCICIO 38
# Convierte una calificación numérica en texto.
def calificacion_en_texto(calificacion):
    if not 0 <= calificacion <= 100:
        raise ValueError("La calificación debe estar entre 0 y 100")
    if calificacion <= 69:
        return "insuficiente"
    if calificacion <= 79:
        return "bien"
    if calificacion <= 89:
        return "muy bien"
    return "excelente"


# EJERCICIO 39
# Calcula el área de un rectángulo, círculo o triángulo.
def calcular_area(figura, datos):
    figura = figura.lower()
    if figura == "rectangulo" and len(datos) == 2:
        base, altura = datos
        return base * altura
    if figura == "circulo" and len(datos) == 1:
        (radio,) = datos
        return pi * radio**2
    if figura == "triangulo" and len(datos) == 2:
        base, altura = datos
        return base * altura / 2
    raise ValueError("Figura o datos no válidos")


# EJERCICIO 40
# Calcula el precio final aplicando, si procede, un cupón de descuento.
def compra_interactiva():
    try:
        precio_original = float(input("Precio original del artículo: "))
        if precio_original < 0:
            raise ValueError("El precio no puede ser negativo")

        tiene_cupon = input("¿Tienes un cupón de descuento? (sí/no): ").strip().lower()

        if tiene_cupon in ("sí", "si"):
            descuento = float(input("Valor del cupón: "))
            if descuento > 0:
                precio_final = max(0, precio_original - descuento)
            else:
                print("El cupón no es válido.")
                precio_final = precio_original
        elif tiene_cupon == "no":
            precio_final = precio_original
        else:
            print("Respuesta no reconocida; no se aplicará ningún descuento.")
            precio_final = precio_original

        print(f"Precio final: {precio_final:.2f}")
    except ValueError as error:
        print(f"Dato no válido: {error}")


if __name__ == "__main__":
    print("Ejercicio 1:", frecuencia_letras("Hola mundo"))
    print("Ejercicio 2:", duplicar_valores([1, 2, 3, 4, 5]))
    print("Ejercicio 3:", buscar_palabras(["casa", "casco", "perro"], "cas"))
    print("Ejercicio 4:", diferencia_listas([10, 20, 30], [1, 2, 3]))
    print("Ejercicio 5:", calcular_media_y_estado([7, 5, 6]))
    print("Ejercicio 6:", factorial(5))
    print("Ejercicio 7:", tuplas_a_strings([(1, 2), (3, 4)]))
    print("Ejercicio 9:", filtrar_mascotas(["Perro", "Tigre", "Gato"]))
    print("Ejercicio 10:", manejar_promedio([]))
    print("Ejercicio 12:", longitudes_palabras("Python es muy útil"))
    print("Ejercicio 13:", caracteres_mayusculas_minusculas("abaca"))
    print("Ejercicio 14:", palabras_por_inicial(["casa", "coche", "mesa"], "c"))
    print("Ejercicio 15:", sumar_tres([1, 2, 3]))
    print("Ejercicio 16:", palabras_mas_largas(["sol", "montaña", "mar"], 3))
    print("Ejercicio 17:", digitos_a_numero([5, 7, 2]))
    estudiantes = [
        {"nombre": "Ana", "edad": 20, "calificacion": 95},
        {"nombre": "Luis", "edad": 21, "calificacion": 82},
    ]
    print("Ejercicio 18:", estudiantes_destacados(estudiantes))
    print("Ejercicio 19:", filtrar_impares([1, 2, 3, 4, 5]))
    print("Ejercicio 20:", filtrar_enteros([1, "dos", 3, "cuatro"]))
    print("Ejercicio 21:", cubo(4))
    print("Ejercicio 22:", producto_total([2, 3, 4]))
    print("Ejercicio 23:", concatenar_palabras(["Hola", "mundo"]))
    print("Ejercicio 24:", diferencia_total([20, 5, 3]))
    print("Ejercicio 25:", contar_caracteres("Python"))
    print("Ejercicio 26:", calcular_resto(10, 3))
    print("Ejercicio 27:", calcular_promedio([5, 7, 9]))
    print("Ejercicio 28:", primer_duplicado([1, 2, 3, 2, 4]))
    print("Ejercicio 29:", enmascarar("123456789"))
    print("Ejercicio 30:", son_anagramas("roma", "amor"))
    empleados = [
        {"nombre": "Ana López", "puesto": "Desarrolladora"},
        {"nombre": "Luis Pérez", "puesto": "Diseñador"},
    ]
    print("Ejercicio 32:", buscar_puesto("Ana López", empleados))
    print("Ejercicio 33:", sumar_listas([1, 2, 3], [4, 5, 6]))

    arbol = Arbol()
    arbol.crecer_tronco()
    arbol.nueva_rama()
    arbol.crecer_ramas()
    arbol.nueva_rama()
    arbol.nueva_rama()
    arbol.quitar_rama(2)
    print("Ejercicio 34:", arbol.info_arbol())

    alicia = UsuarioBanco("Alicia", 100, True)
    bob = UsuarioBanco("Bob", 50, True)
    bob.agregar_dinero(20)
    try:
        alicia.transferir_dinero(bob, 80)
    except ValueError as error:
        print("Ejercicio 35, transferencia rechazada:", error)
    alicia.retirar_dinero(50)
    print("Ejercicio 35:", {"Alicia": alicia.saldo, "Bob": bob.saldo})

    texto = "hola mundo hola"
    print("Ejercicio 36 contar:", procesar_texto(texto, "contar"))
    print("Ejercicio 36 reemplazar:", procesar_texto(texto, "reemplazar", "hola", "adiós"))
    print("Ejercicio 36 eliminar:", procesar_texto(texto, "eliminar", "mundo"))
    print("Ejercicio 37:", periodo_del_dia(16))
    print("Ejercicio 38:", calificacion_en_texto(92))
    print("Ejercicio 39:", calcular_area("circulo", (3,)))

    print("\nEjercicios interactivos disponibles:")
    print("8: division_interactiva()")
    print("11: solicitar_edad()")
    print("31: buscar_nombre_interactivo()")
    print("37: periodo_interactivo()")
    print("40: compra_interactiva()")
from turtle import *
print("Mangekanttegner")
sider=int(input("Hvor mange sider i mangekanten?"))
for i in range(sider):
    forward(50)
    right(360/sider)

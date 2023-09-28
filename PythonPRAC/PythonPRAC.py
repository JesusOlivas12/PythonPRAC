"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx
class State(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        if self.count > 0:
            self.count -= 1

def box():
    button1 = State()
    
    return rx.hstack(
        rx.button(
            "-",
            color_scheme="red",
            border_radius="1em",
            on_click=State.decrement,
        ),
        rx.heading(State.count, font_size="2em"),
        rx.button(
            "+",
            color_scheme="green",
            border_radius="1em",
            on_click=State.increment,
        ),
    )


def tabla():
    return rx.center(
    rx.table_container(
    
    rx.table(
        
        rx.thead(
            
            rx.tr(
                
                rx.th("###"),
                rx.th("Producto"),
                rx.th("Precio"),
                rx.th("Qty"),
                rx.th("Total"),
            )
        ),
        rx.tbody(
            rx.tr(
                
                rx.td("1"),
                rx.td("'''''''''''''''''''''''''''''''''''''''''''''''''''''"),
                rx.td(30),
                box(),
            ),
            rx.tr(
                rx.td("1"),
                rx.td("Taco"),
                rx.td(31),
                box(),
                
            ),
            rx.tr(
                rx.td("1"),
                rx.td("Taco"),
                rx.td(32),
                box(),
                

                rx.td("00000",color_scheme="green"),
                
            ),
        
        
        
    ),
        
        variant="striped",
        color_scheme="teal",
        
),

    )
    )
    
    
    
''''''''''
class State(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        if self.count > 0:
            self.count -= 1

def boton():
    return rx.center(
        rx.hstack(
            
            rx.heading("Taco de asada"),
            rx.button(
            "-",
            color_scheme="red",
            border_radius="1em",
            on_click=State.decrement,
            
        ),
        
        rx.heading(State.count, font_size="2em"),
        rx.button(
            "+",
            color_scheme="green",
            border_radius="1em",
            on_click=State.increment,
        ),
        rx.text('70mil usd'),
    ),
)
'''

    
    




def index():
    #return boton()
    return tabla()
    

    





'''''
def index():
    return rx.hstack(
        rx.button(
            "-",
            color_scheme="red",
            border_radius="1em",
            on_click=State.decrement,
        ),
        rx.heading(State.count, font_size="2em"),
        rx.button(
            "+",
            color_scheme="green",
            border_radius="1em",
            on_click=State.increment,
        ),
    )
'''

app = rx.App()
app.add_page(index, title="Counter")
app.compile()

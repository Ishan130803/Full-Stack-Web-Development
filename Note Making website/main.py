class test:
    GLOBAL_VAR = 0
    def __init__(self, play):
        self.play = play
        self.command = 'command'
        
    def func(self, help='commmand',):
        # making a new comment
        print('Hello')  
        self.play = 'hello'
        
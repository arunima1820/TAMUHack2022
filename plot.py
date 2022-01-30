# importing the required module
from matplotlib.figure import Figure


def generatePlot():
    fig = Figure()
    ax = fig.subplots()
    # x axis values
    x = [1, 2, 3]
    # corresponding y axis values
    y = [2, 4, 1]

    # naming the x axis
    # fig.xlabel('x - axis')
    # naming the y axis
    # fig.ylabel('y - axis')

    # giving a title to my graph
    ax.set_title('My first graph!')

    ax.plot(x, y)
    # plt.show()

    # function to show the plot
    fig.savefig('./static/test.png', format="png")
    return "img/test.png"

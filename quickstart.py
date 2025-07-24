import requests
from bs4 import BeautifulSoup


class GraphSegment:

    def __init__(self, x_coordinate:int, y_coordinate:int=None, character:str=None):
        self.x_coordinate = x_coordinate
        self.y_coordinate = y_coordinate
        self.character = character

    def __repr__(self):
        return f'GraphSegment(({self.x_coordinate},{self.y_coordinate}),{self.character})'

def get_graph_segments_from_url(document_url):
    response = requests.get(document_url)
    assert response.status_code == 200
    bst = BeautifulSoup(response.content, 'html.parser')
    pars = bst.find_all('p')
    column = None #The data columns have not started
    row = None #The data rows have not started
    graph_segments = []
    for par in pars:
        if par.text == "x-coordinate":
            assert column is None #Check that this is the first column title
            assert row is None #Checks that we have not started with data
            column = 1 #1-based column numbering
            row = 0 #This is the title row, which will be considered as row 0
        elif par.text == "Character":
            assert column == 1
            column = 2
        elif par.text == "y-coordinate":
            assert column == 2
            column = 3
        elif par.text == "":
            #Empty string, probably the end of table. Skip.
            pass
        else:
            if row is None:
                # We have not started the data: skip
                pass
            elif column == 3:
                # We finished a row, then we start a new row
                row += 1
                column = 1
                graph_segments.append(GraphSegment(x_coordinate=int(par.text)))
            else:
                #We just advance column
                column += 1
                if column == 2:
                    graph_segments[-1].character = par.text
                elif column == 3:
                    graph_segments[-1].y_coordinate = int(par.text)
    return graph_segments

def get_secret_message(document_url):
    graph_segments = get_graph_segments_from_url(document_url)
    graph_segments_by_y = {}
    for graph_segment in graph_segments:
        if graph_segment.y_coordinate not in graph_segments_by_y:
            graph_segments_by_y[graph_segment.y_coordinate] = {}
        assert graph_segment.x_coordinate not in graph_segments_by_y[graph_segment.y_coordinate], "The same coordinates should not be repeated"
        graph_segments_by_y[graph_segment.y_coordinate][graph_segment.x_coordinate] = graph_segment
    max_y = max(graph_segments_by_y.keys())
    for y_coord in reversed(range(0, max_y + 1)):
        if y_coord in graph_segments_by_y:
            row = graph_segments_by_y[y_coord]
            max_x = max(row.keys())
            for x_coord in range(0, max_x + 1):
                if x_coord in row:
                    print(row[x_coord].character,end="")
                else:
                    print(" ",end="")
        print("")

def create_staircase_step_a(nums):
  while len(nums) != 0:
    step = 1
    subsets = []
    if len(nums) >= step:
      subsets.append(nums[0:step])
      nums = nums[step:]
      step += 1
    else:
      return False

  return subsets


def create_staircase_step_b(nums):
    step = 1
    subsets = []
    while len(nums) != 0:
        if len(nums) >= step:
            subsets.append(nums[0:step])
            nums = nums[step:]
            step += 1
        else:
            return False

    return subsets



if __name__ == "__main__":
    #get_secret_message("https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub")
    get_secret_message("https://docs.google.com/document/d/e/2PACX-1vSZ1vDD85PCR1d5QC2XwbXClC1Kuh3a4u0y3VbTvTFQI53erafhUkGot24ulET8ZRqFSzYoi3pLTGwM/pub")
    lst = [1, 2, 3, 4, 5, 6, 7]
    sa = create_staircase_step_a(lst)
    sb = create_staircase_step_b(lst)
    print(sa)
    print(sb)

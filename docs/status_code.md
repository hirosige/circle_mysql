# API Response Status Code

* MAINTAINER : Hiroshige.Negishi <ARMS>

|Code | Message              | Actually                            |
|-----|----------------------|-------------------------------------|
| 200 | OK                   | Get data successfully               |
| 201 | Created              | Created data successfully           |
| 204 | No Content           | Delete data successfully            |
| 401 | Unauthorized         | Something wrong with access token   |
| 404 | Not Found            | Something wrong with api target url |
| 422 | Unprocessable Entity | Violate rails model validation<br>check `src/api/app/models/*.rb`  |
| 5xx | APP errors           | Your Fault!                         |

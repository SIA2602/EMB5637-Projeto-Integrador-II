import unittest
import requests

class TestApiMethods(unittest.TestCase):

    URL = "http://127.0.0.1:5000"
    list_id_unidades = []
    list_id_usuarios = []
    list_id_ativos = []

    def test_get_all(self):
        request = requests.get(f'{self.URL}/api')
        self.assertEqual(request.status_code, 200)

    def test_get_unidades(self):
        request = requests.get(f'{self.URL}/api/unidades').json()                       
        self.assertEqual(request["status_code"], 200)       

        for unidade in request["items"]:
            self.list_id_unidades.append(unidade["id"]) 

    def test_post_unidades_existente(self):
        for i in range(len(self.list_id_unidades)):
            request = requests.post(f'{self.URL}/api/unidades', json={
                "id": self.list_id_unidades[i],
                "name": "Test",
                "companyId": 0
            }).json()
            
            self.assertEqual(request["status_code"], 404)           

    def test_get_usuarios(self):
        request = requests.get(f'{self.URL}/api/usuarios').json()
        self.assertEqual(request["status_code"], 200)

        for usuario in request["items"]:
            self.list_id_usuarios.append(usuario["matricula"])

    def test_post_usuario_existente(self):
        for i in range(len(self.list_id_usuarios)):
            request = requests.post(f'{self.URL}/api/usuarios', json={
                "matricula": self.list_id_usuarios[i]                
            }).json()
            
            self.assertEqual(request["status_code"], 404) 

    def test_get_ativos(self):
        request = requests.get(f'{self.URL}/api/ativos').json()
        self.assertEqual(request["status_code"], 200)

        for ativo in request["items"]:
            self.list_id_ativos.append(ativo["id"])

    def test_post_ativo_existente(self):
        for i in range(len(self.list_id_ativos)):
            request = requests.post(f'{self.URL}/api/ativos', json={
                "id": self.list_id_ativos[i]               
            }).json()
            
            self.assertEqual(request["status_code"], 404) 

if __name__ == '__main__':
    unittest.main()
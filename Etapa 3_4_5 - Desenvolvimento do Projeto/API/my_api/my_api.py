from flask import Flask, request, jsonify
import json

aplication = Flask(__name__)

api = {
  'ativos': [
      {
        'id': 1,
        'sensors': [
          'GSJ1535'
        ],
        'model': 'motor',
        'status': 'inOperation',
        'healthscore': 70,
        'name': 'Motor H13D-1',
        'image': 'https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg',
        'specifications': {
          'maxTemp': 80
        },
        'metrics': {
          'totalCollectsUptime': 7516,
          'totalUptime': 1419.620084999977,
          'lastUptimeAt': '2021-02-16T16:17:50.180Z'
        },
        'unitId': 1,
        'companyId': 1
      },
      {
        'id': 2,
        'sensors': [
          'IBS1636'
        ],
        'status': 'inDowntime',
        'healthscore': 73.7,
        'model': 'motor',
        'name': 'Motor H12D-1',
        'image': 'https://tractian-img.s3.amazonaws.com/dc8a497655c688ce381d6a3ba4af684d.jpeg',
        'metrics': {
          'totalCollectsUptime': 1279,
          'totalUptime': 1420.5929977777462,
          'lastUptimeAt': '2021-02-16T16:12:18.342Z'
        },
        'specifications': {
          'power': 1.5,
          'maxTemp': 53,
          'rpm': 0
        },
        'unitId': 1,
        'companyId': 1
      },
      {
        'id': 3,
        'sensors': [
          'JVC1134'
        ],
        'status': 'inOperation',
        'healthscore': 90.9,
        'model': 'motor',
        'name': 'Motor H12D-3',
        'image': 'https://tractian-img.s3.amazonaws.com/646a1fe6494d3a7405908076a5ac1429.jpeg',
        'metrics': {
          'totalCollectsUptime': 889,
          'totalUptime': 1500.29189638886,
          'lastUptimeAt': '2021-02-16T16:20:51.029Z'
        },
        'specifications': {
          'maxTemp': 57,
          'power': 0,
          'rpm': 1750
        },
        'unitId': 5,
        'companyId': 1
      },
      {
        'id': 4,
        'sensors': [
          'LZY5230'
        ],
        'status': 'inOperation',
        'healthscore': 88.3,
        'model': 'motor',
        'name': 'Motor H12D-2',
        'image': 'https://tractian-img.s3.amazonaws.com/73a0d014d00f704b73965a049695ad0d.jpeg',
        'metrics': {
          'totalCollectsUptime': 8540,
          'totalUptime': 1523.0280638888194,
          'lastUptimeAt': '2021-02-16T16:20:43.786Z'
        },
        'specifications': {
          'maxTemp': 55,
          'rpm': 1740,
          'power': 0
        },
        'unitId': 4,
        'companyId': 1
      },
      {
        'id': 5,
        'sensors': [
          'NBX2120'
        ],
        'status': 'inAlert',
        'healthscore': 60.4,
        'model': 'fan',
        'name': 'Ventilador D21',
        'image': 'https://tractian-img.s3.amazonaws.com/16fbd9f50d3c6cfca8c6c2bc834ac0f0.jpeg',
        'metrics': {
          'totalCollectsUptime': 8276,
          'totalUptime': 1474.8898133332748,
          'lastUptimeAt': '2021-02-16T16:25:28.989Z'
        },
        'specifications': {
          'rpm': 840,
          'maxTemp': 64,
          'power': 1.5
        },
        'unitId': 3,
        'companyId': 1
      },
      {
        'id': 6,
        'sensors': [
          'MOE1378'
        ],
        'status': 'inDowntime',
        'healthscore': 91.2,
        'model': 'fan',
        'name': 'Ventilador D22',
        'image': 'https://tractian-img.s3.amazonaws.com/2f7eb04cfa255ab00088534f7d51f6f4.jpeg',
        'metrics': {
          'totalCollectsUptime': 6231,
          'totalUptime': 1542.8288661110903,
          'lastUptimeAt': '2021-02-16T16:23:58.801Z'
        },
        'specifications': {
          'rpm': 832,
          'maxTemp': 58,
          'power': 1.5
        },
        'unitId': 3,
        'companyId': 1
      },
      {
        'id': 7,
        'sensors': [
          'MYS2173'
        ],
        'status': 'inAlert',
        'healthscore': 53.8,
        'model': 'fan',
        'name': 'Ventilador D23',
        'image': 'https://tractian-img.s3.amazonaws.com/1c588f23dc92a7b97975a10757dd0435.jpeg',
        'metrics': {
          'totalCollectsUptime': 8293,
          'totalUptime': 1454.0194266666383,
          'lastUptimeAt': '2021-02-16T16:26:06.835Z'
        },
        'specifications': {
          'rpm': 894,
          'maxTemp': 60,
          'power': 1.5
        },
        'unitId': 4,
        'companyId': 1
      },
      {
        'id': 8,
        'sensors': [
          'HPO6412'
        ],
        'status': 'inAlert',
        'healthscore': 76.12,
        'model': 'fan',
        'name': 'Ventilador D24',
        'image': 'https://tractian-img.s3.amazonaws.com/19f526bc0f39fcf451de4098f48cd7d1.jpeg',
        'metrics': {
          'totalCollectsUptime': 7799,
          'totalUptime': 1385.774407499964,
          'lastUptimeAt': '2021-02-16T16:18:37.247Z'
        },
        'specifications': {
          'rpm': 880,
          'power': 1.5,
          'maxTemp': 51
        },
        'unitId': 5,
        'companyId': 1
      },
      {
        'id': 9,
        'sensors': [
          'BMS9149'
        ],
        'status': 'inAlert',
        'healthscore': 66.09,
        'model': 'fan',
        'name': 'Ventilador D25',
        'image': 'https://tractian-img.s3.amazonaws.com/28a89d706a3ef5579da321896b9d0da6.jpeg',
        'metrics': {
          'totalCollectsUptime': 7690,
          'totalUptime': 1460.7369638888385,
          'lastUptimeAt': '2021-02-16T16:23:58.879Z'
        },
        'specifications': {
          'rpm': 820,
          'maxTemp': 61,
          'power': 1.5
        },
        'unitId': 2,
        'companyId': 1
      },
      {
        'id': 10,
        'sensors': [
          'KBJ1010'
        ],
        'status': 'inOperation',
        'healthscore': 50.13,
        'model': 'fan',
        'name': 'Ventilador D26',
        'image': 'https://tractian-img.s3.amazonaws.com/4be920ff78c4cf143494d0af4e56ca06.jpeg',
        'metrics': {
          'totalCollectsUptime': 8178,
          'totalUptime': 1531.5139161110642,
          'lastUptimeAt': '2021-02-16T16:23:59.725Z'
        },
        'specifications': {
          'rpm': 870,
          'maxTemp': 61,
          'power': 1.5
        },
        'unitId': 2,
        'companyId': 1
      }
  ],
  'unidades': [
    {
      'id': 1,
      'name': 'Thebrain',
      'companyId': 1
    },
    {
      'id': 2,
      'name': 'Tobias',
      'companyId': 1
    },
    {
      'id': 3,
      'name': 'Hal',
      'companyId': 1
    },
    {
      'id': 4,
      'name': 'Jaguar',
      'companyId': 1
    },
    {
      'id': 5,
      'name': 'Multivac',
      'companyId': 1
    }
  ],
  'usuarios': [
    {
      'matricula': 42,
      'email': 'teste1@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQEmO6cWUy8j7g/profile-displayphoto-shrink_400_400/0/1621112907778?e=1634169600&v=beta&t=7HkUPzw5_TgasBhgF5as6iBkJCxnXY2Ld_O-RfTUqdo',
      'name': 'Alexandre',
      'unitId': 5,
      'companyId': 1
    },
    {
      'matricula': 75,
      'email': 'teste2@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQFudB9DB_Ht3w/profile-displayphoto-shrink_400_400/0/1618792175223?e=1634169600&v=beta&t=AbPSyB1rdIUUFAuiL4ylOjpyLevcurEFfeXuce517xg',
      'name': 'Bruna Tavares',
      'unitId': 5,
      'companyId': 1
    },
    {
      'matricula': 96,
      'email': 'teste3@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQFz1VzuvMiq9g/profile-displayphoto-shrink_400_400/0/1596405162167?e=1634169600&v=beta&t=tpYiz2_Lo1hHUIuotQdYDA6laPzu_4I4OU66BM_YCe8',
      'name': 'Acir Marconato',
      'unitId': 4,
      'companyId': 1
    },
    {
      'matricula': 14,
      'email': 'teste4@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQH4glaUAtugWQ/profile-displayphoto-shrink_400_400/0/1581367543279?e=1634169600&v=beta&t=O9NM7i5FfcVgqaYDHvv5Nax7lUikDfpB_I-TQT_l1Hs',
      'name': 'Jessica Medalha',
      'unitId': 1,
      'companyId': 1
    },
    {
      'matricula': 10,
      'email': 'teste5@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C5603AQG1O3KsDcWEyw/profile-displayphoto-shrink_400_400/0/1543336638450?e=1634169600&v=beta&t=deh-o67zz3kLsp2AwVeyB6eu02etNP5UHlpJqlDbqxc',
      'name': 'Anete Rodrigues',
      'unitId': 3,
      'companyId': 1
    },
    {
      'matricula': 60,
      'email': 'teste6@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQGfR-SqvO--WQ/profile-displayphoto-shrink_400_400/0/1574808352081?e=1634169600&v=beta&t=t-75UJWd93tkTz1RhZJmE7runJXvsM6oAvsDOuLaYYo',
      'name': 'Rudimar',
      'unitId': 2,
      'companyId': 1
    },
    {
      'matricula': 44,
      'email': 'teste7@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQHU6MteOil13A/profile-displayphoto-shrink_400_400/0/1537299874050?e=1634169600&v=beta&t=uRchWLjN0jBH59S_icQZJpwbpYHCW1GVZQB--gyQAlQ',
      'name': 'Daniela',
      'unitId': 3,
      'companyId': 1
    },
    {
      'matricula': 105,
      'email': 'teste8@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQFEO6BYrj9zaQ/profile-displayphoto-shrink_400_400/0/1628808620615?e=1634169600&v=beta&t=fPJp9PlzKlRXQzEAyUCV3fEgfa87Kk8vZlWJO8VYM8c',
      'name': 'Danilo',
      'unitId': 3,
      'companyId': 1
    },
    {
      'matricula': 120,
      'email': 'teste9@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4D03AQFafcnI-D0HHA/profile-displayphoto-shrink_400_400/0/1623300821614?e=1634169600&v=beta&t=m8uqH74IsYgMf4uUFdr6Z1h0v-lQGyT5WtQnPCGetI8',
      'name': 'Mateus',
      'unitId': 1,
      'companyId': 1
    },
    {
      'matricula': 105,
      'email': 'teste10@hotmail.com',
      'foneNumber': '(47) 99999-9999',
      'imgProfile': 'https://media-exp1.licdn.com/dms/image/C4E03AQFM618Qw4Vs3Q/profile-displayphoto-shrink_400_400/0/1626396724146?e=1634169600&v=beta&t=6pbHYnuAxpX_YDfGPNQR5y4H9DzyZRhbbxRF1XPjGUk',
      'name': 'Joshua',
      'unitId': 5,
      'companyId': 1
    }
  ],
  'empresa': [
    {
      'id': 1,
      'name': 'Empresa Teste'
    }
  ]
}

#Funcao que permite POST ou GET para as unidades
@aplication.route("/unidades", methods=['GET','POST'])
def unidades():
  if(request.method == 'GET'):
      return(jsonify(api.get('unidades')))
  elif(request.method == 'POST'):    
      data = json.loads(request.data) 
      api["unidades"].append(data)       
      return(jsonify({'post': 'success'}))   

#Funcao que permite DELETE para as unidades
@aplication.route("/unidades/<int:id>/", methods=['DELETE'])
def deleteUnidades(id):
  if(request.method == 'DELETE'):
    for i in range(len(api['unidades'])-1):
      if(api['unidades'][i]['id'] == id):     
        api["unidades"].pop(i)       
    return(jsonify({'delete': 'success'})) 

#Retornando pelo metodo GET a api com toda sua estrutura
@aplication.route("/api", methods=['GET'])
def getApi():
  if(request.method == "GET"):
    return(jsonify(api))

if __name__ == "__main__":
    aplication.run(debug=True)
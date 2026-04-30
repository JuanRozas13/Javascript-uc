/**
 Jogo gemeos
 @author Juan Rozas
*/

void setup() {
 
  pinMode(5, OUTPUT);  //AMARELO
  pinMode(4, OUTPUT);  //AZUL
  pinMode(3, OUTPUT);  //VERMELHO
  pinMode(2, OUTPUT);  //VERDE
 
  //Botões
  pinMode(11, INPUT_PULLUP);  //botão amarelo
  pinMode(10, INPUT_PULLUP);  //botão azul
  pinMode(9, INPUT_PULLUP);   //botão vermelho
  pinMode(8, INPUT_PULLUP);   //botão verde
 
 
  //Ativar comunicação serial
  Serial.begin(9600);
}
 
void loop() {
  int botaoAmarelo = digitalRead(11);  //0(Botão apertado) ou 1(Botão não pressionado)
  int botaoAzul = digitalRead(10);     //0(Botão apertado) ou 1(Botão não pressionado)
  int botaoVermelho = digitalRead(9);  //0(Botão apertado) ou 1(Botão não pressionado)
  int botaoVerde = digitalRead(8);     //0(Botão apertado) ou 1(Botão não pressionado)
 
  Serial.println(botaoAmarelo);
  if (botaoAmarelo == 0) {
    digitalWrite(5, HIGH);
  } else if (botaoAzul == 0) {
    digitalWrite(4, HIGH);
  } else if (botaoVermelho == 0) {
    digitalWrite(3, HIGH);
  } else if (botaoVerde == 0) {
    digitalWrite(2, HIGH);
  } else {
    digitalWrite(5, LOW);
    digitalWrite(4, LOW);
    digitalWrite(3, LOW);
    digitalWrite(2, LOW);
  }
}
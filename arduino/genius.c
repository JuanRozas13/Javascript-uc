/**
 Jogo Genius
 @author Juan Rozas
*/

  //Vetor usado para armazenar a sequência de cada rodada
  int sequencia[32] = {}; // Foi criado um vetor(lista) de 32 posições (rodadas)

  //Vetor usado para armazenar a cor do led 
  int leds [] = {2, 3, 4, 5};

  //Vetor usado para armazenar as frequência das notas músicais
  int tons[] = {262, 294, 330, 349};

  // 

  //Variável de apoio
  int rodada = 0;

void setup() {

  pinMode(5, OUTPUT);  //AMARELO
  pinMode(4, OUTPUT);  //AZUL
  pinMode(3, OUTPUT);  //VERMELHO
  pinMode(2, OUTPUT);  //VERDE

  //Buzzer
  pinMode(6, OUTPUT);

  //Botões
  pinMode(11, INPUT_PULLUP);  //botão amarelo
  pinMode(10, INPUT_PULLUP);  //botão azul
  pinMode(9, INPUT_PULLUP);   //botão vermelho
  pinMode(8, INPUT_PULLUP);   //botão verde

  //Ativar comunicação serial
  Serial.begin(9600);

  //Referencia a função random() - sorteio
  randomSeed(analogRead(A0));
}

void loop() {
  //Função que executa a próxima rodada
  proximaRodada();
  //Função que reproduz a sequencia armazenada no vetor
  reproduzirSequencia();
  delay(2000);
}

//Função que reproduz(leds e notas musicais) a sequencia armazenada no vetor
void reproduzirSequencia(){
  for (int i = 0; i < rodada; i++){
    tone(6, tons[sequencia[i]]);
    digitalWrite(leds[sequencia[i]], HIGH);
    delay(300); //ajuste no tempo de piscar o LED
    noTone(6);
    digitalWrite(leds[sequencia[i]], LOW);
    delay(300); //ajuste no tempo de piscar o LED
    
  }
}

//Função que sorteia um numero entre 0, 1, 2 ou 3
void proximaRodada(){
  sequencia[rodada] = random(4); //sorteio: 0, 1, 2, 3
  Serial.print(sequencia[rodada]);
  rodada++; //É igual a (rodada = rodada + 1) 
}

Vermelho
verde
azul
Amarelo 

aaVvavavAVaa
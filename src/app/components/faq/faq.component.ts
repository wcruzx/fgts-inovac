import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'O que é o Saque-aniversário FGTS?',
      answer:
        'O saque-aniversário do FGTS é a modalidade que permite o trabalhador sacar parte do seu saldo do FGTS todo ano, no mês de seu aniversário.',
      isOpen: false,
    },
    {
      id: 2,
      question: 'Como funciona a antecipação do saque-aniversário do FGTS?',
      answer:
        'Os usuários podem solicitar o empréstimo do saque-aniversário e o saldo do FGTS disponível para retirada é utilizado como garantia. Por isso, não tem parcelas mensais, o valor é descontado diretamente do FGTS.',
      isOpen: false,
    },
    {
      id: 3,
      question:
        'Quem pode contratar o adiantamento do saque-aniversário do FGTS?',
      answer:
        'Ser maior de 18 anos e ter pelo menos R$ 00,00 de saldo no fundo de garantia.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Por que preciso autorizar os bancos parceiros?',
      answer:
        'A inovac trabalha com bancos parceiros no processo de facilitação do adiantamento do saque-aniversário do FGTS. É por meio deles que o valor será liberado e depositado em sua conta.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Preciso autorizar os bancos parceiros novamente após 90 dias?',
      answer:
        'Sim, a autorização com o banco parceiro tem validade de noventa dias. Passado este tempo, é preciso refazê-la no app FGTS.',
      isOpen: false,
    },
    {
      id: 6,
      question: 'Posso antecipar o saque-aniversário do FGTS mais de uma vez?',
      answer:
        'Sim, os usuários da Inovac podem solicitar quantas vezes quiserem a antecipação do saque aniversário, desde que tenha o saldo mínimo suficiente de ao menos R$85,00 em seu FGTS.',
      isOpen: false,
    },
    {
      id: 7,
      question: 'Como fazer a antecipação de FGTS?',
      answer:
        'Basta escolher a modalidade do saque-aniversário pelo app do FGTS e autorizar o Inovac a fazer a consulta. Entre em contato conosco através do WhatsApp para iniciar o processo.',
      isOpen: false,
    },
    {
      id: 8,
      question: 'Como funciona o pagamento da antecipação do FGTS?',
      answer:
        'As parcelas devidas no empréstimo FGTS são pagas de forma automática, anualmente. A Caixa Econômica Federal transfere para o banco credor o valor do saque-aniversário.',
      isOpen: false,
    },
    {
      id: 9,
      question: 'Antecipar o FGTS compromete outras linhas de crédito?',
      answer:
        'Não, você pode continuar tendo acesso livremente a outros tipos de empréstimo, como o consignado, o empréstimo pessoal e com garantia de veículo, por exemplo.',
      isOpen: false,
    },
    {
      id: 10,
      question: 'Posso antecipar menos parcelas do FGTS?',
      answer:
        'Sim, na Inovac você pode antecipar quantas parcelas anuais do saque-aniversário desejar, até o limite de 10 parcelas.',
      isOpen: false,
    },
    {
      id: 11,
      question: 'Tem como pagar antes o empréstimo do FGTS?',
      answer:
        'Sim, você pode fazer a antecipação de parcelas e até mesmo quitar o seu contrato de empréstimo FGTS quando quiser. Entre em contato conosco para mais informações sobre quitação antecipada. Atenção: você não pode usar seu saldo FGTS para a quitação antecipada, ok? O valor das parcelas precisa ser pago com recursos próprios.',
      isOpen: false,
    },
  ];

  toggleFaq(id: number): void {
    console.log('toggleFaq called with id:', id); // Debug temporário
    this.faqItems = this.faqItems.map((item) => ({
      ...item,
      isOpen: item.id === id ? !item.isOpen : false,
    }));
    console.log(
      'faqItems after toggle:',
      this.faqItems.find((i) => i.id === id)?.isOpen
    ); // Debug temporário
  }
}

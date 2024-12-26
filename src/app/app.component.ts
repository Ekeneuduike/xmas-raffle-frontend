import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Web3Service } from './service/web3.service';
import { Winner } from '../../contractInfo';
import { ShortenAddressPipe } from './pipe/shorten-address.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ShortenAddressPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.getWinner()
    this.isConnected();
  }
  title = 'xmasRaffle';
  connected_user!:string;

  service = inject(Web3Service);

  raffleDuration = 3600; // 1 hour in seconds
  remainingTime = this.raffleDuration;
  hours = '00';
  minutes = '00'
  seconds = '00';

  lastWinner:Winner = {
    winner: '0x1234...abcd',
    amount: 100,
  };

  steps = [
    {
      title: 'Step 1: Enter',
      description:
        'Join the raffle by contributing just $1 through your wallet.',
    },
    {
      title: 'Step 2: Wait',
      description:
        'Each round lasts about one hour. Relax while the blockchain processes entries.',
    },
    {
      title: 'Step 3: Win!',
      description:
        'The winner is announced and takes the prize, while 20% is retained by the contract.',
    },
  ];

  ngOnInit(): void {
    this.updateTimer();
    setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateTimer();
      } else {
        // Reset for demonstration purposes
        this.remainingTime = this.raffleDuration;
      }
    }, 1000);
  }

  async getWinner(){
    this.lastWinner =  await this.service.getWinner();

  }

 async isConnected(){
   this.connected_user = await this.service.getConnectedAccount();
  }

  updateTimer(): void {
    this.hours = Math.floor(this.remainingTime / 3600)
      .toString()
      .padStart(2, '0');
    this.minutes = Math.floor((this.remainingTime % 3600) / 60)
      .toString()
      .padStart(2, '0');
    this.seconds = (this.remainingTime % 60).toString().padStart(2, '0');
  }

  async connectWallet() {
    await this.service.connectWallet();
    this.isConnected();
    // alert('Connecting wallet... (Blockchain integration placeholder)');
  }

  async enterRaffle() {
    await this.service.enterRaffle();
    // alert('Entering raffle... (Blockchain integration placeholder)');
  }
}

// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'display' to display a summary of my contacts, as well as my other pages.
`;
};



// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'display' - short summary.
'resume' - my latest resume.
'skills' - List of tech skills i've developed over the years`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const skills = async (args: string[]): Promise<string> => {
  return `
  Programming Languages:
  - Java
  - Python
  - SQL

  Web Development:
  - Static Site Generators
  - Hugo
  - SpringBoot
  - Next.js

  Data stuff:
  - AWS Glue (ETL)
  - Pandas
  - Excel

  Others
  - Perfromance Testing
  - Apache JMeter
  - QA Testing
  - Git
  `
};


export const rick = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); 
  return `Rickkkkkkkkkk `;
};

export const personal = async (args?: string[]): Promise<string> => {
  window.open('https://gideonler.vercel.app/', '_blank'); // Redirect to my home page
  return `You are now leaving the terminal to my full webpage. `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
My name is...

  ░██████╗░██╗██████╗░███████╗░█████╗░███╗░░██╗  ██╗░░░░░███████╗██████╗░
  ██╔════╝░██║██╔══██╗██╔════╝██╔══██╗████╗░██║  ██║░░░░░██╔════╝██╔══██╗
  ██║░░██╗░██║██║░░██║█████╗░░██║░░██║██╔██╗██║  ██║░░░░░█████╗░░██████╔╝
  ██║░░╚██╗██║██║░░██║██╔══╝░░██║░░██║██║╚████║  ██║░░░░░██╔══╝░░██╔══██╗
  ╚██████╔╝██║██████╔╝███████╗╚█████╔╝██║░╚███║  ███████╗███████╗██║░░██║
  ░╚═════╝░╚═╝╚═════╝░╚══════╝░╚════╝░╚═╝░░╚══╝  ╚══════╝╚══════╝╚═╝░░╚═╝
                                                                                  
Currently an undergrad @ Singapore Management University, studying Information Systems. 
During my free time I enjoy exploring new technologies and building side projects! Feel free to play around with this terminal :D 

Type 'help' to see the list of available commands.
Type 'display' to display a summary of my contacts, as well as my other pages.
Type 'about' to view an overview of me.
Also, checkout my other webpage over <u><a class = "text-light-blue dark:text-dark-blue underline" href="https://gideonler.vercel.app/" target="_blank">here</a></u>.

`;
};

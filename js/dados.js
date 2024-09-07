let dados = [
    {
        titulo: "Ubuntu",
        descricao: "Ubuntu é uma das distribuições Linux mais populares, conhecida por sua facilidade de uso e forte suporte comunitário. Desenvolvido pela Canonical, é ideal tanto para iniciantes quanto para usuários avançados.",
        link: "https://ubuntu.com/",
        tags: "ubuntu linux distro"
    },
    {
        titulo: "Fedora",
        descricao: "Fedora é uma distribuição Linux patrocinada pela Red Hat, conhecida por suas inovações e por ser um campo de testes para novas tecnologias. É popular entre desenvolvedores e entusiastas do Linux.",
        link: "https://getfedora.org/",
        tags: "fedora linux distro"
    },
    {
        titulo: "Arch Linux",
        descricao: "Arch Linux é uma distribuição leve e flexível que segue a filosofia KISS (Keep It Simple, Stupid). É conhecida por sua abordagem 'faça você mesmo', permitindo aos usuários personalizar seu sistema desde o início.",
        link: "https://www.archlinux.org/",
        tags: "arch linux distro"
    },
    {
        titulo: "Debian",
        descricao: "Debian é uma das distribuições Linux mais antigas e estáveis, usada como base para várias outras distros, incluindo o Ubuntu. É conhecida por sua robustez e vasto repositório de pacotes.",
        link: "https://www.debian.org/",
        tags: "debian linux distro"
    },
    {
        titulo: "Linux Mint",
        descricao: "Linux Mint é uma distribuição baseada no Ubuntu, focada em fornecer uma experiência de usuário simples e intuitiva. É uma excelente escolha para quem está migrando do Windows para Linux.",
        link: "https://linuxmint.com/",
        tags: "linux mint linux distro"
    },
    {
        titulo: "Manjaro",
        descricao: "Manjaro é uma distribuição baseada no Arch Linux, projetada para ser acessível a novos usuários com uma interface gráfica amigável, mantendo a flexibilidade e potência do Arch.",
        link: "https://manjaro.org/",
        tags: "manjaro linux distro"
    },
    {
        titulo: "OpenSUSE",
        descricao: "OpenSUSE é uma distribuição Linux que oferece uma abordagem equilibrada entre estabilidade e inovação, sendo ideal para uso corporativo e pessoal. É patrocinada pela SUSE.",
        link: "https://www.opensuse.org/",
        tags: "opensuse linux distro"
    },
    {
        titulo: "Gentoo",
        descricao: "Gentoo é uma distribuição conhecida por seu enfoque na personalização e otimização, permitindo aos usuários compilar o sistema a partir do código-fonte para melhor desempenho e ajuste.",
        link: "https://www.gentoo.org/",
        tags: "gentoo linux distro"
    },
    {
        titulo: "Slackware",
        descricao: "Slackware é uma das distribuições Linux mais antigas e conservadoras, conhecida por sua simplicidade e aderência aos princípios UNIX. É popular entre usuários avançados.",
        link: "https://www.slackware.com/",
        tags: "slackware linux distro"
    },
    {
        titulo: "Kali Linux",
        descricao: "Kali Linux é uma distribuição baseada no Debian, voltada para testes de penetração e segurança. É amplamente utilizada por profissionais de segurança para avaliações de segurança e auditorias.",
        link: "https://www.kali.org/",
        tags: "kali linux distro"
    },
    {
        titulo: "Zorin OS",
        descricao: "Zorin OS é uma distribuição baseada no Ubuntu, projetada para ser fácil para iniciantes e para quem está migrando do Windows, oferecendo uma interface de usuário similar ao Windows.",
        link: "https://zorin.com/os/",
        tags: "zorin linux distro"
    },
    {
        titulo: "Puppy Linux",
        descricao: "Puppy Linux é uma distribuição leve e rápida, projetada para funcionar em hardware mais antigo e oferecer um sistema operacional completo a partir de um ambiente mínimo.",
        link: "http://puppylinux.com/",
        tags: "puppy linux distro"
    },
    {
        titulo: "MX Linux",
        descricao: "MX Linux é uma distribuição baseada no Debian com foco em facilidade de uso e eficiência. É conhecida por seu desempenho sólido e interface amigável.",
        link: "https://mxlinux.org/",
        tags: "mx linux distro"
    },
    {
        titulo: "Solus",
        descricao: "Solus é uma distribuição independente, projetada para fornecer uma experiência de usuário moderna e eficiente, com um foco em facilidade de uso e desempenho.",
        link: "https://getsol.us/",
        tags: "solus linux distro"
    },
    {
        titulo: "Clear Linux",
        descricao: "Clear Linux é uma distribuição otimizada pela Intel, projetada para fornecer o máximo desempenho em hardware Intel. É focada em desempenho e segurança.",
        link: "https://clearlinux.org/",
        tags: "clear linux distro"
    },
    {
        titulo: "NixOS",
        descricao: "NixOS é uma distribuição que usa um gerenciador de pacotes único e um sistema de configuração declarativa. Permite reverter e reproduzir facilmente configurações do sistema.",
        link: "https://nixos.org/",
        tags: "nixos linux distro"
    },
    {
        titulo: "Alpine Linux",
        descricao: "Alpine Linux é uma distribuição leve e segura, projetada para ser pequena e eficiente. É frequentemente utilizada em containers e ambientes de alta segurança.",
        link: "https://www.alpinelinux.org/",
        tags: "alpine linux distro"
    },
    {
        titulo: "LXLE",
        descricao: "LXLE é uma distribuição baseada no Ubuntu, projetada para ser leve e oferecer uma experiência de usuário eficiente em hardware mais antigo.",
        link: "http://lxle.net/",
        tags: "lxle linux distro"
    },
    {
        titulo: "BackBox",
        descricao: "BackBox é uma distribuição baseada no Ubuntu, voltada para testes de segurança e auditorias de segurança. Oferece uma ampla gama de ferramentas de análise de segurança.",
        link: "https://www.backbox.org/",
        tags: "backbox linux distro"
    },
    {
        titulo: "ReactOS",
        descricao: "ReactOS é um sistema operacional de código aberto que visa fornecer compatibilidade com software Windows. Embora não seja baseado no Linux, é frequentemente comparado devido à sua abordagem alternativa ao software livre.",
        link: "https://www.reactos.org/",
        tags: "reactos os"
    },
    {
        titulo: "Peppermint OS",
        descricao: "Peppermint OS é uma distribuição baseada no Ubuntu, focada em desempenho e leveza. É projetada para ser uma solução rápida e eficiente, combinando o melhor do Linux e da web.",
        link: "https://peppermintos.com/",
        tags: "peppermint linux distro"
    },
    {
        titulo: "Sabayon Linux",
        descricao: "Sabayon Linux é uma distribuição baseada no Gentoo, com uma instalação mais simples e amigável. Oferece uma variedade de ambientes de desktop e é conhecida por sua facilidade de uso em comparação com o Gentoo puro.",
        link: "https://www.sabayon.org/",
        tags: "sabayon linux distro"
    },
    {
        titulo: "Tails",
        descricao: "Tails é uma distribuição baseada no Debian, projetada para fornecer anonimato e privacidade. É frequentemente usada por jornalistas e ativistas para navegar na internet de forma segura e anônima.",
        link: "https://tails.boum.org/",
        tags: "tails linux distro"
    },
    {
        titulo: "Void Linux",
        descricao: "Void Linux é uma distribuição independente que oferece um sistema simples e eficiente com um sistema de pacotes próprio. É conhecida por sua filosofia de manutenção mínima e performance.",
        link: "https://voidlinux.org/",
        tags: "void linux distro"
    },
    {
        titulo: "Qubes OS",
        descricao: "Qubes OS é uma distribuição focada em segurança e privacidade, usando uma abordagem baseada em virtualização para isolar aplicações e garantir um ambiente seguro.",
        link: "https://www.qubes-os.org/",
        tags: "qubes os linux distro"
    },
    {
        titulo: "Calculate Linux",
        descricao: "Calculate Linux é uma distribuição baseada no Gentoo, projetada para fornecer uma configuração fácil e personalizável, ideal para uso em servidores e desktops.",
        link: "https://calculate-linux.org/",
        tags: "calculate linux distro"
    },
    {
        titulo: "EndeavourOS",
        descricao: "EndeavourOS é uma distribuição baseada no Arch Linux, focada em fornecer uma instalação fácil e amigável para usuários que desejam experimentar o Arch Linux sem complicações.",
        link: "https://endeavouros.com/",
        tags: "endeavouros linux distro"
    },
    {
        titulo: "Raspberry Pi OS",
        descricao: "Raspberry Pi OS, anteriormente conhecido como Raspbian, é uma distribuição baseada no Debian, otimizada para o hardware Raspberry Pi. É amplamente utilizada em projetos de hobby e educação.",
        link: "https://www.raspberrypi.org/software/",
        tags: "raspberry pi os linux distro"
    },
    {
        titulo: "MX Linux",
        descricao: "MX Linux é uma distribuição baseada no Debian com foco em facilidade de uso e eficiência. É conhecida por seu desempenho sólido e interface amigável.",
        link: "https://mxlinux.org/",
        tags: "mx linux distro"
    },
    {
        titulo: "BlackArch",
        descricao: "BlackArch é uma distribuição baseada no Arch Linux, voltada para testes de penetração e segurança. Oferece uma ampla gama de ferramentas para profissionais de segurança.",
        link: "https://blackarch.org/",
        tags: "blackarch linux distro"
    },
    {
        titulo: "Bodhi Linux",
        descricao: "Bodhi Linux é uma distribuição baseada no Ubuntu que utiliza o ambiente de desktop Enlightenment para proporcionar uma experiência leve e personalizável.",
        link: "https://www.bodhilinux.com/",
        tags: "bodhi linux distro"
    },
    {
        titulo: "PCLinuxOS",
        descricao: "PCLinuxOS é uma distribuição independente que visa fornecer um sistema fácil de usar e altamente configurável, com uma grande variedade de software pré-instalado.",
        link: "https://www.pclinuxos.com/",
        tags: "pclinuxos linux distro"
    },
    {
        titulo: "LXQt",
        descricao: "LXQt é uma distribuição baseada no ambiente de desktop LXQt, conhecida por ser leve e rápida. É ideal para sistemas com recursos limitados.",
        link: "https://lxqt.org/",
        tags: "lxqt linux distro"
    },
    {
        titulo: "SolydXK",
        descricao: "SolydXK é uma distribuição baseada no Debian, oferecendo duas versões, uma com o ambiente de desktop XFCE e outra com KDE. Foca na estabilidade e usabilidade.",
        link: "https://solydxk.com/",
        tags: "solydxk linux distro"
    },
    {
        titulo: "SparkyLinux",
        descricao: "SparkyLinux é uma distribuição baseada no Debian, projetada para ser leve e rápida, com várias edições e ambientes de desktop para diferentes necessidades.",
        link: "https://www.sparkylinux.org/",
        tags: "sparkylinux linux distro"
    },
    {
        titulo: "Feren OS",
        descricao: "Feren OS é uma distribuição baseada no Ubuntu, projetada para ser fácil de usar e fornecer uma experiência de desktop moderna e atraente.",
        link: "https://ferenos.com/",
        tags: "feren os linux distro"
    },
    {
        titulo: "NuTyX",
        descricao: "NuTyX é uma distribuição independente baseada no sistema de pacotes Linux From Scratch (LFS), oferecendo um sistema altamente customizável e flexível.",
        link: "https://www.nutyx.org/",
        tags: "nutyx linux distro"
    },
    {
        titulo: "Artix Linux",
        descricao: "Artix Linux é uma distribuição baseada no Arch Linux que usa alternativas ao sistema de inicialização systemd, como OpenRC, Runit e s6.",
        link: "https://artixlinux.org/",
        tags: "artix linux distro"
    },
    {
        titulo: "RebornOS",
        descricao: "RebornOS é uma distribuição baseada no Arch Linux, projetada para ser fácil de usar e altamente configurável, com uma ampla gama de opções de desktop e ferramentas.",
        link: "https://rebornos.org/",
        tags: "rebornos linux distro"
    },
    {
        titulo: "FuryBSD",
        descricao: "FuryBSD é uma distribuição baseada no FreeBSD, focada em fornecer uma experiência de usuário amigável e fácil de usar, semelhante a outras distribuições BSD.",
        link: "https://www.furybsd.org/",
        tags: "furybsd linux distro"
    },
    {
        titulo: "Deepin",
        descricao: "Deepin é uma distribuição baseada no Debian, conhecida por sua interface de usuário bonita e fácil de usar. É focada em oferecer uma experiência de desktop polida e moderna.",
        link: "https://www.deepin.org/",
        tags: "deepin linux distro"
    },
    {
        titulo: "Knoppix",
        descricao: "Knoppix é uma distribuição baseada no Debian, conhecida por ser uma das primeiras distros Live CD. É amplamente usada para recuperação de sistemas e testes.",
        link: "http://www.knoppix.org/",
        tags: "knoppix linux distro"
    },
    {
        titulo: "AntiX",
        descricao: "AntiX é uma distribuição baseada no Debian, projetada para ser leve e rápida, oferecendo uma boa performance em hardware mais antigo e com poucos recursos.",
        link: "https://antixlinux.com/",
        tags: "antix linux distro"
    },
    {
        titulo: "Tiny Core Linux",
        descricao: "Tiny Core Linux é uma distribuição extremamente pequena e leve, projetada para ser executada a partir da memória e adequada para sistemas com recursos muito limitados.",
        link: "http://tinycorelinux.net/",
        tags: "tiny core linux distro"
    },
    {
        titulo: "Elive",
        descricao: "Elive é uma distribuição baseada no Debian que utiliza o ambiente de desktop Enlightenment. Foca em oferecer uma experiência de usuário leve e visualmente atraente.",
        link: "https://www.elivecd.org/",
        tags: "elive linux distro"
    },
    {
        titulo: "SUSE Linux Enterprise",
        descricao: "SUSE Linux Enterprise é uma distribuição Linux comercial desenvolvida pela SUSE, focada em ambientes corporativos e servidores, oferecendo suporte e soluções empresariais.",
        link: "https://www.suse.com/products/enterprise-linux/",
        tags: "suse linux enterprise distro"
    },
    {
        titulo: "ClearOS",
        descricao: "ClearOS é uma distribuição baseada no CentOS, projetada para ser um sistema operacional de rede com recursos de servidor e gateway, oferecendo uma interface de gerenciamento intuitiva.",
        link: "https://www.clearos.com/",
        tags: "clearos linux distro"
    }
];

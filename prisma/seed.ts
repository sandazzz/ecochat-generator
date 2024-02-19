const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
	// Creation de l'article
    await prisma.article.create({
        data : {
            title:"Les Pandas",
            author:"By Me",
			publishedAt: new Date,
            illustration:"/assets/panda.jpg",
			description:  "Ceci est un article sur les pandas",
        }
    })

	//Section 1
	await prisma.section.create({
		data : {
			title:"Introduction",
			order: 1,
			articleId: 1,
		}
	})

	// Section 1 Paragraphe 1
	await prisma.paragraph.create({
		data : {
			content:"Le Panda géant (Ailuropoda melanoleuca) est un mammifères de la famille des Ursidés (Ursidae), endémique de Chine centrale. Il fait partie de l'ordre des Carnivores, même si son régime alimentaire est constitué à 99 % de végétaux, principalement de bambou.",
			sectionId: 1,
		}
	})

	// Section 1 Paragraphe 2
	await prisma.paragraph.create({
		data : {
			content:"Endémique des régions montagneuses des provinces du Sichuan et du Gansu (dont une partie faisait partie des régions de l'Amdo et du Kham du Tibet oriental dans l'Empire du Tibet (629 – 877)), et du Shaanxi, il vit dans les forêts d'altitude, entre 1 000 et 4 000 mètres.",
			sectionId: 1,
		}
	})

	//Section 2 
	await prisma.section.create({
		data : {
			title:"Descriptions ",
			order: 2,
			articleId: 1,
		}
	})

	//Section 2 Paragraphe 1
	await prisma.paragraph.create({
		data : {
			content:"De fourrure noire et blanche, le panda est majoritairement blanc, avec les oreilles, les pattes et le contour des yeux noirs. Son pelage épais le protège du froid des régions de haute altitude où il vit.",
			sectionId: 2,
		}
	})
}

main()
	.then(async() => {
		await prisma.$disconnect()
	})
	.catch(async(e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
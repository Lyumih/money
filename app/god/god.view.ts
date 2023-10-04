namespace $.$$ {
	export class $money_app_god extends $.$money_app_god {

		@$mol_mem
		balance_text( next?: any ): string {
			const result = this.$.$money_fetch.json( '/god/balance' ) as {
				gods: [
					{
						id: string
						name: string
						adepts: number
						caravans: number
					}
				]
			}
			return result.gods.map( god => `# Бог ${ god.name }\n- Адептов: ${ god.adepts }\n- Караванов: ${ god.caravans } руб` ).join( '\n' )
		}

	}
}

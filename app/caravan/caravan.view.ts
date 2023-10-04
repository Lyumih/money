namespace $.$$ {
	export class $money_app_caravan extends $.$money_app_caravan {

		@$mol_action
		caravan_grab( next?: any ) {
			console.log( next )
			if( next ) {
				const result = this.$.$money_fetch.json( '/caravan/grab' ) as {
					grab: boolean,
					money: number,
				}
				console.log( result )
				return result
			}
			// this.win( result.money )
			return next ?? {}
		}

		@$mol_mem
		win( next?: any ): string {
			return next ?? `Успешно ограбили караван на ` + this.caravan_grab().money
		}

		@$mol_mem
		lose( next?: any ): string {
			return next ?? `Вас самих ограбили на ` + this.caravan_grab().money
		}

	}
}

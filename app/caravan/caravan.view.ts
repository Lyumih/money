namespace $.$$ {
	export class $money_app_caravan extends $.$money_app_caravan {

		@$mol_mem
		caravan_grab( next?: any ) {
			if( next ) {
				return this.$.$money_fetch.json( '/caravan/grab' ) as {
					grab: boolean,
					money: number,
				}
			}
			return next
		}

		@$mol_mem
		win( next?: any ) {
			if( this.caravan_grab() === undefined ) return 'Самое время начать!'
			return ( this.caravan_grab().grab ? '# Вы ограбили караван на ' : '# Вас самих ограбили на ' ) + this.caravan_grab().money
		}
	}
}

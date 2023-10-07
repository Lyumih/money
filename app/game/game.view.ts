namespace $.$$ {
	export class $money_app_game extends $.$money_app_game {

		@ $mol_mem
		menu_links() {
			const links: any[] = [this.Menu_link('skills')]
			if (this.level() >= 2) links.push(this.Menu_link('card'))
			if (this.level() >= 3) links.push(this.Menu_link('caravan'))
			if (this.level() >= 4) links.push(this.Menu_link('god'))
			return links
		}
	}
}

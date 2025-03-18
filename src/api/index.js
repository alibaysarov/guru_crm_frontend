class Api {
    base_url = "http://localhost:8000"
    async getMessagesByChatName(name,body) {
        const link = `${this.base_url}groups/${name}`
        await result = fetch(link,{
            method:"POST",
            body
        })
    }
}
export default new Api()
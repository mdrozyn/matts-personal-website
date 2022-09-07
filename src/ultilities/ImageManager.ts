export class ImageManager {

    static getArtPageImages(): string[] {
        
        function importAll(r: any) {
            return r.keys().map(r);
        }
        const imagePaths: string[] = importAll(require.context('../images/artPage', false, /\.(png|jpe?g|svg)$/));

        return imagePaths;
    }
}
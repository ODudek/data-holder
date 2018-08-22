import { Application } from 'express';
import { PhotoController } from 'controllers/photo';

export class PhotoRoutes {

	public photoController: PhotoController = new PhotoController();

	public routes(app: Application): void {

		app.route('/photos')
			.get(this.photoController.getPhotos)
			.post(this.photoController.addPhoto);
		app.route('/photos/:photoId')
			.get(this.photoController.getPhotoWithId)
			.put(this.photoController.updatePhoto)
			.delete(this.photoController.deletePhoto);
	}
}

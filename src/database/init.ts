import { Repo } from "@automerge/automerge-repo";
import { IndexedDBStorageAdapter } from "@automerge/automerge-repo-storage-indexeddb";

const repo = new Repo({
	storage: new IndexedDBStorageAdapter(),
});

export function initDb() {
	let rootDocId = localStorage.rootDocId;
	if (!rootDocId) {
		const handle = repo.create();
		localStorage.rootDocId = rootDocId = handle.documentId;
	}

	return rootDocId;
}

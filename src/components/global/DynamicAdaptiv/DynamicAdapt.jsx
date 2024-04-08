class DynamicAdapt {
    constructor(type) {
        this.type = type;
        this.daClassname = "_dynamic_adapt_";
        this.objects = [];
        this.nodes = document.querySelectorAll("[data-da]");
        this.mediaQueries = [];
    }

    init = () => {
        this.populateObjects();
        this.arraySort(this.objects);

        this.mediaQueries = this.objects.map((item) => `(${this.type}-width: ${item.breakpoint}px),${item.breakpoint}`);

        this.mediaQueries = this.mediaQueries.filter((item, index, self) => self.indexOf(item) === index);

        this.mediaQueries.forEach((media) => {
            const mediaSplit = media.split(',');
            const matchMedia = window.matchMedia(mediaSplit[0]);
            const mediaBreakpoint = mediaSplit[1];

            const objectsFilter = this.objects.filter((item) => item.breakpoint === mediaBreakpoint);

            matchMedia.addListener(() => {
                this.mediaHandler(matchMedia, objectsFilter);
            });

            this.mediaHandler(matchMedia, objectsFilter);
        });
    };

    populateObjects = () => {
        this.nodes.forEach((node) => {
            const data = node.dataset.da.trim();
            const dataArray = data.split(",");
            const object = {
                element: node,
                parent: node.parentNode,
                destination: document.querySelector(dataArray[0].trim()),
                breakpoint: dataArray[1] ? dataArray[1].trim() : "767",
                place: dataArray[2] ? dataArray[2].trim() : "last",
                index: this.indexInParent(node.parentNode, node),
            };
            this.objects.push(object);
        });
    };

    mediaHandler = (matchMedia, objects) => {
        if (matchMedia.matches) {
            objects.forEach((object) => {
                object.index = this.indexInParent(object.parent, object.element);
                this.moveTo(object.place, object.element, object.destination);
            });
        } else {
            for (let i = objects.length - 1; i >= 0; i--) {
                const object = objects[i];
                if (object.element.classList.contains(this.daClassname)) {
                    this.moveBack(object.parent, object.element, object.index);
                }
            }
        }
    };

    moveTo = (place, element, destination) => {
        element.classList.add(this.daClassname);
        if (place === 'last' || place >= destination.children.length) {
            destination.insertAdjacentElement('beforeend', element);
            return;
        }
        if (place === 'first') {
            destination.insertAdjacentElement('afterbegin', element);
            return;
        }
        destination.children[place].insertAdjacentElement('beforebegin', element);
    };

    moveBack = (parent, element, index) => {
        element.classList.remove(this.daClassname);
        if (parent.children[index] !== undefined) {
            parent.children[index].insertAdjacentElement('beforebegin', element);
        } else {
            parent.insertAdjacentElement('beforeend', element);
        }
    };

    indexInParent = (parent, element) => {
        const array = Array.prototype.slice.call(parent.children);
        return Array.prototype.indexOf.call(array, element);
    };

    arraySort = (arr) => {
        if (this.type === "min") {
            arr.sort((a, b) => {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }

                    if (a.place === "first" || b.place === "last") {
                        return -1;
                    }

                    if (a.place === "last" || b.place === "first") {
                        return 1;
                    }

                    return a.place - b.place;
                }

                return a.breakpoint - b.breakpoint;
            });
        } else {
            arr.sort((a, b) => {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }

                    if (a.place === "first" || b.place === "last") {
                        return 1;
                    }

                    if (a.place === "last" || b.place === "first") {
                        return -1;
                    }

                    return b.place - a.place;
                }

                return b.breakpoint - a.breakpoint;
            });
        }
    };
}

export default DynamicAdapt;
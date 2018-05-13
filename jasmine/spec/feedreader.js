/* feedreader.js *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions, 
    the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL and that URL is not empty', function() {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            });
        });

        it('has a name and that name is not empty', function() {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            });
        });
    });
    
        describe('The menu', function() {    

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('shows up when click on the menu icon', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
        });
        
        it('hides when click again', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, done);
            }, 1000);
        });

        it('has at least one entry', function(done) {
            expect($('.feed').children().length).not.toBe(0); 
            done();
        });
    });

    describe('New Feed Selection', function() {
        let oldFeed, newFeed;    

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                done();
                });                
            });           
        });

        it ('changes content', function(done) {
            expect(oldFeed).not.toEqual(newFeed);
            done();            
        });
    });

}());
